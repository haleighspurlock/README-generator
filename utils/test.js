const createReadme = require('./generateMarkdown');

function testGenerateMarkdown () {
    var testData = {
        title: "test",
        license: "ISC",
        description: "test description",
        usage: "test usage",
        contributing: "test contributing",
        tests: "test test",
        installation: "installation test",
        questions: "test questions",
        github: "twohyjr",
        email: "fakemail@email.com"
    }   
    
    pbcopy(createReadme(testData))
    
    function pbcopy(data) {
        var proc = require('child_process').spawn('pbcopy'); 
        proc.stdin.write(data); proc.stdin.end();
    } 
}
testGenerateMarkdown()