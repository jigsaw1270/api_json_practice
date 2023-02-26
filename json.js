const  shop =  {
    owner : 'pathan',
    address : {
        street : "34/7 mojamama ",
        city : 'dhaka',
        country : 'bd'
    },
    products : ['shampoo', 'conditioner', 'monitor', 'match'],
    revenue : 4500,
    isopen : true ,
    isnew : false


}

// console.log(shop);
const  shopJson = JSON.stringify(shop);


const shopObj = JSON.parse(shopJson);
console.log(shopObj);