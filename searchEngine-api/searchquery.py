from elasticsearch import Elasticsearch

INDEX = 'tamil-song-lyrics'
client = Elasticsearch(HOST="http://localhost", PORT=9200,
                       http_auth=('elastic', 'EMyoDwDL4UH=4GHQW5X='))

def basic_search(query):
    q = {
        "query": {
            "query_string": {
                "query": query
            }           
        },
         "size": 100
    }
    return q

def getAnalyzer(field, analyzer):
    if (analyzer=="plain"):
        return field
    return field + '.' + analyzer

def advanced_search(query):
    must =[]
    if(query['lyrics']):
        must.append({"match": {"lyrics": query['lyrics']}})
    if(query['album']['value']):
        must.append({"match": {getAnalyzer("album", query['album']['analyzer']) : query['album']['value']}})
    if(query['composer']['value']):
        must.append({"match": {getAnalyzer("composer", query['composer']['analyzer']) : query['composer']['value']}})
    if(query['lyricist']['value']):
        must.append({"match": {getAnalyzer("lyricist", query['lyricist']['analyzer']) : query['lyricist']['value']}})
    if(query['singers']['value']):
        must.append({"match": {getAnalyzer("singers", query['singers']['analyzer']) : query['singers']['value']}})
    if(query['song_name']['value']):
        must.append({"match": {getAnalyzer("song_name", query['song_name']['analyzer']) : query['song_name']['value']}})
    if((not query['year']['customRange']) and query['year']['year']):
        must.append({"match": {"year": query['year']['year']}})

    if(query['metaphor']):
        must.append({"match": {"metaphors.metaphor": query['metaphor']}})
    if(query['interpretation']):
        must.append({"match": {"metaphors.interpretation": query['interpretation']}})
    if(query['source']):
        must.append({"match": {"metaphors.source": query['source']}})
    if(query['target']):
        must.append({"match": {"metaphors.target": query['target']}})

    range = None
    if(query['year']['customRange'] and query['year']['from'] and query['year']['to']):
        range = {"range": {"year": {"gte": query['year']['from'], "lte": query['year']['to']}}}
    elif(query['year']['customRange'] and query['year']['from']):
        range = {"range": {"year": { "gte": query['year']['from'] }}}
    elif(query['year']['customRange'] and query['year']['to']):
        range = {"range": {"year": { "lte": query['year']['to']}}}

    body={
            "query": {
                "bool": {
                    "must": must
                }
            },
            "size": 100
        }
    
    if(range):
        body={
            "query": {
                "bool": {
                    "must": must,
                    "filter": [
                        range
                    ]
                }
            },
            "size": 100
        }
    print(body)
    return body


def search(query):
    # result = client. (index=INDEX,body=standard_analyzer(query))
    # keywords = result ['tokens']['token']
    # print(keywords)

    # query_body= process(query)
    query_body = basic_search(query)
    print('Making Basic Search ')
    res = client.search(index=INDEX, body=query_body)
    return res

def advancedSearch(query):
    # result = client. (index=INDEX,body=standard_analyzer(query))
    # keywords = result ['tokens']['token']
    # print(keywords)

    # query_body= process(query)
    query_body = advanced_search(query)
    print('Making Advanced Search ')
    res = client.search(index=INDEX, body=query_body)
    return res