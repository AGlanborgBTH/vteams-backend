## E-Bike REST API Documentation

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
> | `200`     | `text/plain;charset=UTF-8` | YAML string |

##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:3000/v1/users/6397483522a9c3cea58caa87
> ```

</details>

<details>
 <summary><code>GET</code> <code><b>/{stub_numeric_id}</b></code> <code>(gets stub by its resource-id-{stub_numeric_id} in the YAML config)</code></summary>

##### Parameters

> | name              | type     | data type    | description                  |
> | ----------------- | -------- | ------------ | ---------------------------- |
> | `stub_numeric_id` | required | int ($int64) | The specific stub numeric id |

##### Responses

> | http code | content-type               | response                                 |
> | --------- | -------------------------- | ---------------------------------------- |
> | `200`     | `text/plain;charset=UTF-8` | YAML string                              |
> | `400`     | `application/json`         | `{"code":"400","message":"Bad Request"}` |

##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:8889/0
> ```

</details>

<details>
  <summary><code>GET</code> <code><b>/{uuid}</b></code> <code>(gets stub by its defined uuid property)</code></summary>

##### Parameters

> | name   | type     | data type | description                         |
> | ------ | -------- | --------- | ----------------------------------- |
> | `uuid` | required | string    | The specific stub unique idendifier |

##### Responses

> | http code | content-type               | response                                 |
> | --------- | -------------------------- | ---------------------------------------- |
> | `200`     | `text/plain;charset=UTF-8` | YAML string                              |
> | `400`     | `application/json`         | `{"code":"400","message":"Bad Request"}` |

##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:8889/some-unique-uuid-string
> ```

</details>

<details>
  <summary><code>GET</code> <code><b>/proxy-config/default</b></code> <code>(gets <b>default</b> proxy-config)</code></summary>

##### Parameters

> None

##### Responses

> | http code | content-type               | response                                 |
> | --------- | -------------------------- | ---------------------------------------- |
> | `200`     | `text/plain;charset=UTF-8` | YAML string                              |
> | `400`     | `application/json`         | `{"code":"400","message":"Bad Request"}` |

##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:8889/proxy-config/default
> ```

</details>

<details>
  <summary><code>GET</code> <code><b>/proxy-config/{uuid}</b></code> <code>(gets proxy config by its uuid property)</code></summary>

##### Parameters

> | name   | type     | data type | description                                 |
> | ------ | -------- | --------- | ------------------------------------------- |
> | `uuid` | required | string    | The specific proxy config unique idendifier |

##### Responses

> | http code | content-type               | response                                 |
> | --------- | -------------------------- | ---------------------------------------- |
> | `200`     | `text/plain;charset=UTF-8` | YAML string                              |
> | `400`     | `application/json`         | `{"code":"400","message":"Bad Request"}` |

##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:8889/proxy-config/some-unique-uuid-string
> ```

</details>

