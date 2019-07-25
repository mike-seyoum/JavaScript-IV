// CODE here for your Lambda Classes
class Person {
    constructor(att){
    this.name = att.name;
    this.age = att.age;
    this.location = att.location;  

    }
    speak(){

        return`Hello my name is${this.name} I am from ${this.location},`;
    }
}

class Instructor extends Person {
    constructor(inAtt){
        this.specialty = inAtt.specialty;
        this.favLanguage = inAtt.favLanguage;
        this.catchPhrase = inAtt.catPhrase;
    }
        demo(subject) {            //method 
            console.log(`Today we are learning about ${subject},`);
        }
        grade(stundent,student){
        console.log(`${student.name} recieves a perfect score on ${subject},`)
    }
}

class Stundent extends Person {
    constructor(stuAtt){
        this.previousBackground = stuAtt.previousBackground;
        this.className = stuAtt.className;
        this.favSubject = stuAtt.favSubject;
    }
    listSubject(){    //method 
        for (let i = 0; i < this.favSubject.length; i++)
        console.log(this.favSubjects[i]);
    }
    PRAssignment(subject){
        console.log(`${student.name} has submited a PR for${subject}`)
    
    }
    sprintChallenge(){
        console.log(`${student.name} has begun sprint challenge on ${subject}`)
    
    }

    }
    class ProjectManagers extends Person {
        constructor(PMAtt){      //The glue
            this.gradClassName = PMAtt.gradClassName;
            this.favInstructor = PMAtt.favInstructor;
        }
    standUp(channel){
        console.log(``)
    }  
    debugsCode(){
        console.log(`${name} debugs ${stundent.name} 's code on ${subject}`)
    }

    };

    const Mark = new Instructor({
        name: 'Mark',
        location: 'Deliware',
        age: 47,
        FavLanguage: 'JavaSript',
        specialty: 'Software-programmer',
        catchPhrase: 'Level-up'
    }

    );
    const Trevor = new Instructor({
        name: 'Sergio',
        location: 'New york',
        ag3: 23,
        favLanguage: 'Pyton',
        specialty: 'driver',
        catchPhrase: 'never stop',
    })


