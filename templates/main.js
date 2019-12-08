const mainPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style>
        *{
            font-family: Arial, Helvetica, sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        html{
            width: 100vw;
            height: 100vh;
        }
        body{
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
        }
        #header{
            width: 100vw;
            height: 130px;
            background-color: rgb(255, 92, 92);
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2rem;
        }

        #cardHolder{
            background: rgb(255, 247, 230);
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            overflow: scroll;
        }
        .card{
            width: 330px;
            height: 310px;
            border: 1px solid rgb(214, 214, 214);
            margin: 50px 10px;
            border-radius: 4px;
            box-shadow: 5px 5px 10px -5px black;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }
        .caardHeader{
            position: relative;
            width: 100%;
            height: 100px;
            border-radius: 2px 2px 0 0 ;
            background-color: rgb(172, 201, 255);
            display: flex;
            flex-direction: column;
            border-bottom: 3px solid rgb(167, 167, 167);
            box-shadow:   0px -3px 5px -3px black inset;;
        }
        .cardName{
            color: rgb(82, 82, 82);
            margin: 5px;
            margin-top: 13px;
            margin-left: 20px;
        }
        .cardRole{
            color: rgb(122, 122, 122);
            margin: 5px;
            margin-left: 20px;
        }
        .emoji{
            font-size: 3rem;
            position: absolute;
            right: 40px;
            top: 7px;
            text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.445);
        }
        .cardBody{
            position: relative;
            background-color: whitesmoke;
            width: 100%;
            height: 100%;
            box-shadow: 4px 10px 13px -13px black inset;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .table{
            /* border: 1px solid black; */
            border-radius: 5px;
            width: 95%;
            height: 50%;
        }
        ul{
            list-style: none;
        }
        li{
            background-color: white;
            border-radius: 5px;
            margin: 5px;
            border: 1px solid rgb(141, 141, 141);
            padding: 10px;
        }
        span{
            color: rgb(15, 135, 233);
            padding: 10px;
        }
    </style>
    <title>Team</title>
</head>
<body>
    <div id="header">
        My Team!
    </div>
    <div id="cardHolder">
        {{.}}
    </div>
</body>
</html>
`

module.exports = mainPage;