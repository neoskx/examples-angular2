# Server side restful API

`TODO`: based on this document to create SwaggerJSON

## `/comments`

### Description
Get all comments
### Method
`GET`
### Parameters
None
### Response

```
[
  {
    "_id": "s232ss33",
    "name":"Shaoke Xu",
    "comment": "China is great!",
    "title": "Hello world",
    "email": "",
    "website":"",
    "created":"",
    "updated":""
  }
]
```

## `/comments`

### Description
Create a comment

### Method
`POST`

### Parameters

```
{
    "name":"Shaoke Xu",
    "comment": "China is great!",
    "title": "Hello world",
    "email": "",
    "website":""
}
```
### Response

```
{
  "_id": "s232ss33" 
}
```

## `/comments/:id`

### Description
Get a comment

### Method
`GET`

### Parameters
comment id 

### Response

```
{
    "_id": "s232ss33",
    "name":"Shaoke Xu",
    "comment": "China is great!",
    "title": "Hello world",
    "email": "",
    "website":"",
    "created":"",
    "updated":""
}
```

## `/comments/:id`

### Description
Update a comment

### Method
`PUT`

### Parameters

```
{
    "name":"Shaoke Xu",
    "comment": "China is great!",
    "title": "Hello world",
    "email": "",
    "website":""
}
```

### Response

```
{
  "_id": "s232ss33" 
}
```

## `/comments/:id`

### Description
Delete a comment

### Method
`DELETE`

### Parameters
comment id 

### Response

```
{
  "_id": "s232ss33" 
}
```