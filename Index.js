const inq = require('inquirer');
const join = require('joi');

console.clear();
const clear = () =>{
};


const print = async (x) => {
    
    if (x === 'welcome') {
        clear('screen');
        console.log(`
    
                By: Karanius
    
    
        █   █ ▄▀▀ █   ▄▀▀▄ ▄▀▀▄ █▄ ▄█ ▄▀▀
        █   █ █   █   █    █  █ █▀▄▀█ █
        █   █ █▀▀ █   █    █  █ █ ▀ █ █▀▀
        █▄█▄█ █▄▄ █▄█ ▀▄▄█ ▀▄▄▀ █   █ ▀▄▄
    
    
    
        
        ~ Lets generate page for YOU and YOUR TEAM!
    
    
    
        `);
    } else if (x === 'bye'){
        // clear('screen');
        console.log(`


            ~~ BYE!



        `);
    };


};



const ask = async (stage , count) => {    
    
    let toBeAsked;
    if (stage === 'ready') {
        toBeAsked = {
            type: 'confirm',
            name:'answer',
            message: 'Are tou ready to build YOUR team? :D \n\n answer:',
        };
    } else if (stage = 'teamMemberNumber'){
        // clear('screen')
        toBeAsked = {
            type:'input',
            name:'answer',
            message: `
            ~~ How Many Team Members Do You Have? (including you) ? \n     asnwer: `,
            validate: function(num){ const reg = /^\d+$/ ; const isValid = ( num !== '' && reg.test(num) ) ; console.log(isValid); return isValid || 'Bad Input' }
        };
    }

    return await inq
    .prompt(toBeAsked).then(res=>{
        return res.answer 
    });

};

const askQuestions = async () => {
    const ready = await ask('ready');
    if (await ready === true){
        // let num; 
        // let teamArr = []; 
        // let count = 0;
        // while (isNaN(num)) {
            num = await ask("teamMemberNumber");
            // console.log(num)
        // };
        // while (teamArr.length === count) {
        //     let member = await ask('teamInfo', count + 1);
        //     teamArr.push(member);
        // }
    } else {
        // await print('bye');
        process.exit();
    };
};





const init = async () => {
    await print('welcome');
    const answers = await askQuestions();
    // const page = await generatePages(answers);
    // await displayPage(page);
};


init();