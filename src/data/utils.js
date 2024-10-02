const getType = (project) => {
    if(project.type){
        return project.type.name;
    }
    return 'Nessuna tipologia'
}

const getTechnology = (project) => {
    if(project.technologies.length){
        
        return project.technologies.map(technology => technology.name).join(', ');
        
        /* let technologiesString = '';
        project.technologies.forEach((technology, index) => {
            technologiesString += technology.name;
            if(index < project.technologies.length - 1){
                technologiesString += ', ';
            }
        });
        return technologiesString */
    }
    return 'Nessuna tecnologia'
}

const formatData = (date) => {
    return new Date(date).toLocaleDateString()
}

export {getType, getTechnology, formatData}