const Accordion = ({data}) => {

    return(
        <div className="accordion" id="faq">
            {
                data.map((item, index) => (
                    <div key={index} className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#question${index}`}
                                aria-expanded={index === 0 ? "true" : "false"}
                                aria-controls={`question${index}`}
                            >
                                <bold>{item.question}</bold>
                            </button>
                        </h2>
                        <div
                            className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                            id={`question${index}`}
                            // autoclose
                            // data-bs-parent="#faq"
                        >
                            <div className="accordion-body">
                                {item.answer}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Accordion
