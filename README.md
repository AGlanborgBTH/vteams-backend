## E-Bike REST API Documentation

### Users

#### Retriving All Users

<details>
 <summary><code>GET</code> <code><b>/v1/users</b></code> <code>Retrieves a list of all users.</code></summary>

##### Parameters

> | name | type     | data type             | description |
> | ---- | -------- | --------------------- | ----------- |
> | None | required | object (JSON or YAML) | N/A         |

##### Responses

> | http code | content-type               | response                                 |
> | --------- | -------------------------- | ---------------------------------------- |
> | `201`     | `text/plain;charset=UTF-8` | `Configuration retrived successfully`    |
> | `400`     | `application/json`         | `{"code":"400","message":"Bad Request"}` |
> | `405`     | `text/html;charset=utf-8`  | None                                     |

##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" --data @get.json http://localhost:3000/v1/users
> ```

</details>

---

#### Retrive User By Id

<details>
 <summary><code>GET</code> <code><b>/v1/users/:id</b></code> <code>Retrieves a single user by ID</code></summary>

##### Parameters

> None

##### Responses

> | http code | content-type               | response    |
> | --------- | -------------------------- | ----------- |
> | `200`     | `text/plain;charset=UTF-8` | JSON string |

##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:3000/v1/users/6397483522a9c3cea58caa87
> ```

</details>

<details>
 <summary><code>POST</code> <code><b>/v1/users/:id</b></code> <code>Adds a new user</code></summary>

##### Parameters

> | name              | type     | data type    | description                  |
> | ----------------- | -------- | ------------ | ---------------------------- |
> | `stub_numeric_id` | required | int ($int64) | The specific stub numeric id |

##### Responses

> | http code | content-type               | response                                 |
> | --------- | -------------------------- | ---------------------------------------- |
> | `200`     | `text/plain;charset=UTF-8` | JSON String                              |
> | `400`     | `application/json`         | `{"code":"400","message":"Bad Request"}` |

##### Example cURL

> ```javascript
>  curl -X POST -H "Content-Type: application/json" --data @post.json http://localhost:3000/v1/users/6397483522a9c3cea58caa87
> ```

</details>

<details>
  <summary><code>PATCH</code> <code><b>/v1/users/:id</b></code> <code>Updates an existing user by ID</code></summary>

##### Parameters

> | name   | type     | data type | description                         |
> | ------ | -------- | --------- | ----------------------------------- |
> | `uuid` | required | string    | The specific stub unique idendifier |

##### Responses

> | http code | content-type               | response                                 |
> | --------- | -------------------------- | ---------------------------------------- |
> | `200`     | `text/plain;charset=UTF-8` | JSON string                              |
> | `400`     | `application/json`         | `{"code":"400","message":"Bad Request"}` |

##### Example cURL

> ```javascript
>   curl -X PATCH -H "Content-Type: application/json" --data @patch.json http://localhost:3000/v1/users/6397483522a9c3cea58caa87
> ```

</details>

<details>
  <summary><code>DELETE</code> <code><b>/v1/users/:id</b></code> <code>Deletes a single user by ID.</code></summary>

##### Parameters

> None

##### Responses

> | http code | content-type               | response                                 |
> | --------- | -------------------------- | ---------------------------------------- |
> | `200`     | `text/plain;charset=UTF-8` | JSON string                              |
> | `400`     | `application/json`         | `{"code":"400","message":"Bad Request"}` |

##### Example cURL

> ```javascript
>  curl -X DELETE -H "Content-Type: application/json" http://localhost:3000/v1/users/6397483522a9c3cea58caa87
> ```

---

## TEST

---
