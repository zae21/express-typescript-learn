// const lokal = require('../config/db')

// const contss =  {
//     login: (email,password) =>{
//         return new Promise(resolve => {
//             lokal.query(`SELECT * FROM mst_user WHERE username = '${email}' AND password = '${password}';`,
//                 (error, result, fields) => {
//                     if (!error) {
//                         resolve(result[0] || result)
//                     } else {
//                         console.error(error.message)
//                         resolve(error)
//                     }
//                 })
//             }
//         )
//     },
//     info: (id) =>{
//         return new Promise(resolve => {
//             lokal.query(`SELECT * FROM mst_user WHERE id = '${id}';`,
//                 (error, result, fields) => {
//                     if (!error) {
//                         resolve(result[0] || result)
//                     } else {
//                         console.error(error.message)
//                         resolve(error)
//                     }
//                 })
//             }
//         )
//     },
//     user: () =>{
//         return new Promise(resolve => {
//             lokal.query("SELECT Cabang FROM mst_closing;",
//                 (error, result, fields) => {
//                     if (!error) {
//                         console.log("data", result[0].Cabang);
//                         resolve(result[0].Cabang)
//                     } else {
//                         console.error(error.message)
//                         resolve("Error")
//                     }
//                 })
//         }
//         )
//     },
// }

// module.exports =  contss