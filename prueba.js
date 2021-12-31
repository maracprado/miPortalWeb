
// import Formio from 'formiojs';

// // // Load a form
// // const formio = new Formio('http://formio.dev.netops.ar.bsch/uc-golden-configuration/submission/');
// // formio.loadForm().then(function(formio) {
// //   console.log(formio);
// // });

const axios = require('axios').default;
const fs = require ('fs');
let token;

// axios({
//     method: 'post',
//     url: 'http://formio.dev.netops.ar.bsch/user/login',
//     data: {
//         data: {
//             email: 'admin@example.com',
//             password: 'CHANGEME'
//         }
//     },
//     headers: {'Content-Type': 'application/json'},

//   })
//   .then(function (response) {
//     token = response['headers']['x-jwt-token'];
//     console.log (token);
//     axios({
//         method: 'get',
//         url: 'http://formio.dev.netops.ar.bsch/uc-golden-configuration/submission/',
//         headers: {
//             'Content-Type': 'application/json',
//             'x-jwt-token': token
//         },
//         // responseType: 'stream'
//       })

//     })
//     .then(function (response) {
//         console.log (response);
//     })
//     .catch(
//         function (error) {
//             console.log (error);
//             }
//     )


    axios({
        method: 'get',
        url: 'http://formio.dev.netops.ar.bsch/uc-golden-configuration/submission/',
        headers: {
            'Content-Type': 'application/json',
            'x-jwt-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwNDE1N2Q2MGE2NjNhZGM2MTgzNmMyZiJ9LCJmb3JtIjp7Il9pZCI6IjYwNDE1N2Q2MGE2NjNhNzY1YjgzNmMyNSJ9LCJpYXQiOjE2Mzg0MzgwMjksImV4cCI6MTYzODQ1MjQyOX0.QZfdtBwk1sizQlHi1fI05h_dK1xNR7G1q3cxBvgn5Mc"
        },
        // responseType: 'json',
        // responseEncoding: 'utf8',
    })
    .then(function (response) {
        console.log (response['data'][0]['data']);
    })
    .catch(
        function (error) {
            console.log (error);
    })