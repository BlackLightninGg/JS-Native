//promises

// fetch('https//:books.com', (err, data) => {
//   if (err) {
//     console.log('opps, something went wrong');
//   } else {
//     console.log(data);
//     fetch('https//:books/author.com', (err, data) => {
//       if (err) {
//         console.log('opps, something went wrong');
//       } else {
//         console.log(data);
//         fetch('https//:books.author.book.com', (err, data) => {
//           if (err) {
//             console.log('opps, something went wrong');
//           } else {
//             console.log(data);
//             fetch('https//:books.com/author/book/page35', (err, data) => {
//               if (err) {
//                 console.log('opps, something went wrong');
//               } else {
//                 console.log(data);
//               }
//             });
//           }
//         });
//       }
//     });
//   }
// });

// axios.get(`https//:books.com`)
//   .then((data) => {
//     return axios.get(`https//:books.com/${data.authors}`)
//   })
//   .then((data) => {
//     return axios.get(`https//:books.com/${data.authors}/books`)
//   })
//   .then((data) => {
//     return axios.get(`https//:books.com/${data.authors}/author/book`)
//   })
//   .then((data) => {
//     return axios.get(`https//:books.com/${data.authors}/author/book/page23`)
//   })
//   .catch((err) => {
//     console.log('ERROR', err)
//   })

//pending || fulfilled || rejected

const server = {
  getData() {
    return new Promise((res, rej) => {
      const data = ['book1', 'book2', 'book3'];
      // const data = [];
      setTimeout(() => {
        if (data.length > 0) {
          res(data);
        } else {
          rej('opps, something went wrong');
        }
        // res('some data');
      }, 1000);
    });
  },
};

const pr = server.getData();
console.log(pr);

// server
//   .getData()
//   .then((data) => {
//     console.log('then 1');
//     // console.log(data);
//   })
//   .then((data) => {
//     console.log('then 2');
//     throw new Error('some error');
//   })
//   .then((data) => {
//     console.log('then 3');
//   })
//   .then((data) => {
//     console.log('then 4');
//   })
//   .catch((err) => {
//     console.log('ERROR', err);
//   })
//   .then((data) => {
//     console.log('then 5');
//   })
//   .finally((data) => {
//     console.log('finally');
//   });
// .then((data) => {
//   console.log('then 2');
//   console.log(data);
//   return new Promise((res, rej) => {
//     res(3);
//   });
// })
// .then((data) => {
//   console.log('then 3');
//   console.log(data);
// })
// .then(() => {
//   console.log('then 4');
// });

// const Promise = (executor) => {

//   const resolve = (data) => {
//     return {
//       state: fulfilled,
//       data: data
//     }
//   }

//   const reject = (err) => {
//     return {
//       state: rejected,
//       data: err
//     }
//   }

//   executor(resolve, reject)
// }

// const [isLoading, setIsLoading] = useState(false)

//   const pr = axios.get(`https://social-network.samuraijs.com`)
//   setIsLoading(true)
//   pr.then(response => {
//     setUsers(response.data.items);
//   })
//   .catch((err) => {
//     alert('opps, something went wrong because Error', err)
//   })
//   .finally(() => {
//     setIsLoading(false)
//   })

// {isLoading && <Loading />}

// const myPromise = new Promise((res, rej) => {
//   const string = 'str';
//   if (string.length > 5) {
//     res('word is long');
//   } else {
//     rej('word is short');
//   }
// });

// console.log(myPromise);

const delay = (time) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, time);
  });
};

delay(2000).then(() => console.log('resolve'));