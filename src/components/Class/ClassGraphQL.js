import "./Class.css";
import React, {useState, useEffect} from 'react'

function ClassGraphQL(props) {

    const [classInfo, setClassInfo] = useState({})

    const url = "https://api.peterportal.org/graphql"



    useEffect( () => {
        const fetchData = async () => {

            const query =  `
                 query {
                    course(id:"${props.name}") {
                        title
                        department_name
                        description
                    }
                }
            `
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify({query}), 
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            console.log(data);
            setClassInfo(data.data.course);

        }
        fetchData();
    }, [props.name]);

    let info;

    if (classInfo) {
        info = <div className="info-div">
                    <div className="first">
                        <p className="class-title-p">Class Title:</p><p className="class-info-p"id="title">{classInfo.title} </p>
                    </div>
                    <div className="second">
                        <p className="class-department" id="department">Department:</p> <p className="class-info-p">{classInfo.department_name}</p>
                    </div>
                    <div className="third">
                        <p className="class-description" id="description">Description:</p> <p className="class-info-p">{classInfo.description}</p>
                    </div>
                </div>


    } else if (classInfo == null) {
        info = <p id="class-nf">Class Not Found...</p>
    } else {
        info = <p>Loading...</p>
    }
    

    return (
        <div className="class">
            <div className="class-title">
                {props.name}
            </div>
            <div  className="information">
                {info}
            </div>
        </div>
    )
}

export default ClassGraphQL;