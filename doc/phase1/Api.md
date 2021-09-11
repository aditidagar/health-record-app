| Endpoint                           | Description                                              | Body                                           | Return Body |
| :--------------------------------: | :------------------------------------------------------: | :--------------------------------------------: | :---------: |
| **POST** `/xml`                    | Return XML parsed as JSON.                               | XML                                            | JSON        |
| **POST** `/sdcform`                | Add JSON of SDCForm to the database.                     | SDCForm                                        |             |
| **PATCH** `/sdcform/{did}`         | Makes changes to an existing SDCForm on the database.    | SDCForm                                        |             |
| **DELETE** `/sdcform/{did}`        | Delete SDCForm from the database.                        |                                                |             |
| **GET** `/sdcforms`                | Returns a list of SDCForms in the database.              |                                                | `[SDCForm]` |
| **GET** `/sdcresponse/{pid}/{did}` | Returns data filled out in an SDCForm from the database. |                                                | SDCResponse |
| **POST** `/sdcreponse/{pid}`       | Add a SDCReponse to the database.                        | SDCResponse                                    |             |
| **PATCH** `/sdcresponse/{pid}`     | Make changes to an existing SDCResponse in the database. | SDCResponse                                    |             |
| **POST** `/login`                  | Obtain authentication cookie.                            | `{"user": "<username>", "pass": "<password>"}` | Auth cookie |
