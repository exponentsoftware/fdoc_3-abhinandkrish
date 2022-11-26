const users = [
   {
         _id: 'ab12ex',
         username: 'Alex',
         email: 'alex@alex.com',
         password: '123123',
         createdAt:'17/05/2019 9:00 AM',
         isLoggedIn: false
   },
   {
         _id: 'fg12cy',
         username: 'Asab',
         email: 'asab@asab.com',
         password: '123456',
         createdAt:'17/05/2019 9:30 AM',
         isLoggedIn: true
   },
   {
         _id: 'zwf8md',
         username: 'Brook',
         email: 'brook@brook.com',
         password: '123111',
         createdAt:'17/05/2019 9:45 AM',
         isLoggedIn: true
   },
   {
         _id: 'eefamr',
         username: 'Martha',
         email: 'martha@martha.com',
         password: '123222',
         createdAt:'17/05/2019 9:50 AM',
         isLoggedIn: false
   },
   {
         _id: 'ghderc',
         username: 'Thomas',
         email: 'thomas@thomas.com',
         password: '123333',
         createdAt:'17/05/2019 10:00 AM',
         isLoggedIn: false
   }
   ];

   const products = [
{
   _id: 'eedfcf',
   name: 'mobile phone',
   description: 'Huawei Honor',
   price: 200,
   ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
   ],
   likes: []
},
{
   _id: 'aegfal',
   name: 'Laptop',
   description: 'MacPro: System Darwin',
   price: 2500,
   ratings: [],
   likes: ['fg12cy']
},
{
   _id: 'hedfcg',
   name: 'TV',
   description: 'Smart TV:Procaster',
   price: 400,
   ratings: [{ userId: 'fg12cy', rate: 5 }],
   likes: ['fg12cy']
}
];

{/**a. Create a function called ***signUp*** which allows user to add to the collection. 
If user exists, inform the user that he has already an account. */}

const signUp = (userData) => {
   let message;
  let index = users.findIndex(user => user.username === userData.username);
  if (index === -1) {
   users.push(userData);
   message = {users: users};
  } else {
   message = {error: "Users exist"};
  }
  return message;
}

let userData ={
   _id: 'abaaass',
   username: 'Thomas',
   email: 'kevin@kevin.com',
   password: '123333',
   createdAt:'17/05/2022 9:00 AM',
   isLoggedIn: false
}
// console.log("2.a.a)",signUp(userData));

let loginData ={
   username: 'Thomas',
   password: '123333',
}

{/** Create a function called ***signIn*** which allows user to sign in to the application */}
const signIn = (userData) => {
   let user = users.find(user => user.username === userData.username)
   if (!user)    return {message : "User not found"};
   if (user.password !== userData.password) return {message : "Password do not match"};
   user.isLoggedIn = true;
   const { _id, username } = user
   return { _id, username, message:"User Logged in successfully" };
}
// console.log("2.a.b)",signIn(loginData));

const user = signIn(loginData);
// console.log(user._id);

const rateProduct = (userId, productId, ratings) => {  
   let user = users.find(user => user._id === userId);
   if (!user || !user.isLoggedIn) return {message : "Not Authorized"};
   let product = products.find(product => product._id === productId);
   if (!product) return {message : "Product not found"};
   let ratingIndex  = product.ratings.findIndex(ratings => ratings.userId === user._id);
   ratingIndex === -1 ? product.ratings.push({userId :user._id, rate:ratings}) :
      product.ratings[ratingIndex].rate =ratings;
   return    {ratings:product.ratings,message : "Rating added successfully"}
}   

console.log("2.b.a)",rateProduct(user._id,"hedfcg", 5 ));

const averageRating = (productId) => {
   let product = products.find(product => product._id === productId);
   if (!product) return {message : "Product not found"};
   let totalNoRatings = product.ratings.length;
   let totalRatings = product.ratings.reduce((accumulator, obj) =>
      accumulator += obj.rate, 0)
   return totalRatings/totalNoRatings;
}

console.log("2.b.b)",averageRating("hedfcg"));

const likeProduct = (userId, productId) => {  
   let user = users.find(user => user._id === userId);
   if (!user || !user.isLoggedIn) return {message : "Not Authorized"};
   let product = products.find(product => product._id === productId);
   if (!product) return {message : "Product not found"};
   product.likes.findIndex(like => like === user._id) === -1? (product.likes.push(userId), message ="Liked" )
      : (product.likes.splice(product.likes.findIndex(like => like === user._id), 1), message="Un liked");
   return {message : message}
}
console.log("2.c)",likeProduct(user._id,"hedfcg"))

