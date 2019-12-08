const managerTemplate = `
<div class="card">
<div class="caardHeader"><div class="cardName">{{fullName}}</div><div class="cardRole">{{role}}</div><div class="emoji">📁</div></div>
<div class="cardBody">
    <div class="table">
        <ul>
            <li>ID:<span>{{id}}</span></li>
            <li>Email: <span>{{eMail}}</span></li>
            <li>Office Number:<span>{{officeNumber}}</span></li>
        </ul>
    </div>
</div>
</div>
`

module.exports = managerTemplate;