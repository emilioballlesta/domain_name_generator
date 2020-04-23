var pronoun = ['the','our'];
var adj = ['great','big'];
var noun = ['jogger','racoon'];

function domain_generator() {
    var domain = [];
    for (var i = 0; i < pronoun.length; i++){
        for (var j = 0; j < adj.length; j++){
            for (var k = 0; k < adj.length; k++){
                domain.push(pronoun[i] + adj[j] + noun[k] + '.com');
            }
        }
    }

    return domain
}

domain_name_generator = domain_generator();

document.querySelector('p').innerHTML = domain_name_generator;