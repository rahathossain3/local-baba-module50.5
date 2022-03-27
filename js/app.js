// const fruits = [{ name: 'painaple' }, { name: 'mango' }, { name: 'papeya' }];
// const election = ['razzak', 'alogir', 'jayed', 'jayed', 'jayed', 'nepun', 'jayed'];
// const clection2 = {
//     razzak: 1,
//     alomgit: 1,
//     jashim: 1,
//     jayed:3 
// }

const db = {};
const addToDb = item => {
    //three ways to add a property to an object
    // db.alon =1;
    // db['alom'] = 1;
    // db[item] = 1;

    if (item in db) {
        //jodi thake
        //value = value + 1;
        db[item] = db[item] + 1;
    }
    else {
        //jodi na thake
        db[item] = 1
    }

    console.log(db);
}