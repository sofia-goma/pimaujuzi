# This API - Endpoints

each route must start with api for examples:

### web

```ts
useEffect(() => {
  fetch("/api")
    .then((res) => res.text())
    .then((text) => setGreeting(text))
    .catch((err) => console.log(err));
}, []);
```

## REGISTER USER - CREATE ACCOUNT

### **POST** - CREATE A USER - `/api/users `

```json
{
  "nickname": "Birusha",
  "picture": "url", // this is optional
  "pictureId": "string", // this is optional
  "password": "mypassword",
  "email": "birushandegeya@gmail.com"
}
```

## FIND ALL USER

### **GET** : `/api/users`

Your are going to get table like this:

```json
[
  {
    "id": "de65ebe7-fb31-43ca-b074-48852627e409",
    "nickname": "Afrika",
    "picture": null,
    "pictureId": null,
    "created": "2024-09-29T08:15:09.068Z",
    "updated": "2024-09-29T08:15:09.068Z",
    "email": "russi@agmailc.om"
  },
  {
    "id": "de65ebe7-fb31-43ca-b074-48852627e409",
    "nickname": "Node",
    "picture": null,
    "pictureId": null,
    "created": "2024-09-29T08:17:21.023Z",
    "updated": "2024-09-29T08:17:21.023Z",
    "email": "node@agmailc.om"
  }
]
```

### **GET** : `api/users?nickname=Afrika`

Your are going to get table like this:

```json
[
  {
    "id": "de65ebe7-fb31-43ca-b074-48852627e409",
    "nickname": "Afrika",
    "picture": null,
    "pictureId": null,
    "created": "2024-09-29T08:15:09.068Z",
    "updated": "2024-09-29T08:15:09.068Z",
    "email": "russi@agmailc.om"
  }
]
```

// api/users/:id/

### **GET** : `api/users/de65ebe7-fb31-43ca-b074-48852627e409`

Your are going to get table like this:

```json
{
  "id": "de65ebe7-fb31-43ca-b074-48852627e409",
  "nickname": "Msumbiji",
  "picture": null,
  "pictureId": null,
  "created": "2024-09-29T08:49:39.381Z",
  "updated": "2024-09-29T08:49:39.381Z",
  "email": "msumbiji@afrika.bara"
}
```
