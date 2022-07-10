// twitter is the array and it has some objects 
// twitter is an array with objects inside it
let twitter = [
    {
        user_age: 18,
        user_name: `Sam singh`,
        created_at: `04-23-2021`,
        tweet: `having fun at the beach`

    },

    {
        user_age:  20,
        user_name : `Jass singh`,
        created_at: `03-04-2022`,
        tweet:`perfect weather today so sunny outside`
   
    },
    
    {
        user_age: 15,
        user_name: `Manu sandhu`,
        created_at:`02-02-2022`,
        tweet: `nice to have a friend like satinder`

    },

    {
        user_age: 25,
        user_name:`Navi Kahlon`,
        created_at: `06-09-2020`,
        tweet: `bora bora bora bora bnora`

    },

    {
        user_age: 13,
        user_name: `Hans Ranwa`,
        created_at: `04-01-2019`,
        tweet:`honesty is the best policy`

    },

    {
        user_age: 33,
        user_name: `Nitin Bansal`,
        created_at:`05-07-2021`,
        tweet:`always speak truth`

    },

    {
        user_age: 50,
        user_name: `Nuar Sandhu`,
        created_at:`02-05-2021`,
        tweet:`canadian winter is so harsh`

    },

    {
        user_age: 17,
        user_name: `Honey kamboj`,
        created_at:`07-08-2021`,
        tweet: `making money is always good`

    },

    {
        user_age: 33,
        user_name:`Jay Patel`,
        created_at:`07-05-2015`,
        tweet: `latest technology is making our life easy`

    },

    {
        user_age: 11,
        user_name:`Veeru Deol`,
        created_at:`06-06-2009`,
        tweet:`we should take self education seriously`

    },

    {
        user_age: 40,
        user_name:`Shankar Falgun`,
        created_at:`05-05-2011`,
        tweet:`no one can know how the universe was created`

    }

];
// counter should start from zero
let counter = 0;
// the while loop will run counter for twitter object length
while(counter < twitter.length){
    // if loop will check the condition for the user above the age of 18
    if(twitter[counter][`user_age`] >= 18){
        // following console.log will print date and author name for the twitter
        console.log(`The following Tweet was created on : ${twitter[counter][`created_at`]} By the Author:${twitter[counter][`user_name`]} `);
        // following console.log will print the actual tweet
        console.log(`Tweet: ${twitter[counter][`tweet`]}`);    
    } 
    // there was no else statement because there was no need of it. it was creating extra statement if there was no true statement
    // counter will continue add 1 to the last counter after every check
    counter++;
}     
// now the for lop will check the tweets for authors under 18
for (counter = 0; counter < twitter.length; counter++){
    if(twitter[counter][`user_age`] < 18){
         // following console.log will print date and author name for the twitter
         console.log(`The following Tweet was created on : ${twitter[counter][`created_at`]} By the Author:${twitter[counter][`user_name`]} `);
         // following console.log will print the actual tweet
         console.log(`Tweet: ${twitter[counter][`tweet`]}`);    
    } 
        // there was no else statement because there was no need of it. it was creating extra statement if there was no true statement

}