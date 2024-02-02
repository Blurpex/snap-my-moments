import {useState} from "react";

const Contact = () => {

    const [formData, setFormData] = useState({userName: '', email: '', subject: '', body: '', attachment: ''})

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((data) => ({...data, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <div className="container">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="inputName" className="form-label">Name</label>
                            <input type="text" className="form-control" name="userName" id="inputName" value={formData.userName} onChange={handleInputChange}/>

                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="inputEmail" className="form-label">Email</label>
                            <input type="email" className="form-control" name="email" id="inputEmail" value={formData.email} onChange={handleInputChange} required/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="inputSubject" className="form-label">Subject</label>
                            <input type="text" className="form-control" name="subject" id="inputSubject" value={formData.subject} onChange={handleInputChange} required/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="inputBody" className="form-label">Body</label>
                            <textarea className="form-control" name="body" id="inputBody" rows="10" value={formData.body} onChange={handleInputChange} required/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="inputFile" className="form-label">File</label>
                            <input type="file" className="form-control" name="attachment" id="inputFile" value={formData.file} onChange={handleInputChange}/>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Contact
