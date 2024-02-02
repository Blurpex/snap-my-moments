import Accordion from "../components/Accordion.jsx";

const Help = () => {

    const faqData = [
        {
            question: "What are you?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci animi consectetur consequatur cum debitis dolorem dolorum ea explicabo harum impedit ipsum iusto nobis porro praesentium quos recusandae, sequi tempore!"
        },
        {
            question: "How are you?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin libero nunc consequat interdum. Lacinia at quis risus sed vulputate odio ut enim. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Diam ut venenatis tellus in metus vulputate. Viverra orci sagittis eu volutpat. Mattis nunc sed blandit libero volutpat. Morbi tristique senectus et netus et malesuada fames ac turpis. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Diam volutpat commodo sed egestas egestas. Massa vitae tortor condimentum lacinia quis. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Sagittis eu volutpat odio facilisis mauris sit. Libero id faucibus nisl tincidunt eget nullam non nisi est. Imperdiet nulla malesuada pellentesque elit. Pellentesque massa placerat duis ultricies lacus sed turpis. Tortor posuere ac ut consequat semper viverra nam."
        },
        {
            question: "Why are you?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin libero nunc consequat interdum. Lacinia at quis risus sed vulputate odio ut enim. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Diam ut venenatis tellus in metus vulputate. Viverra orci sagittis eu volutpat. Mattis nunc sed blandit libero volutpat. Morbi tristique senectus et netus et malesuada fames ac turpis. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Diam volutpat commodo sed egestas egestas. Massa vitae tortor condimentum lacinia quis. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Sagittis eu volutpat odio facilisis mauris sit. Libero id faucibus nisl tincidunt eget nullam non nisi est. Imperdiet nulla malesuada pellentesque elit. Pellentesque massa placerat duis ultricies lacus sed turpis. Tortor posuere ac ut consequat semper viverra nam."
        }
    ]

    return(
        <div className="container">
            <h1>Frequently Asked Questions</h1>
            <Accordion data={faqData} />
        </div>
    )

}

export default Help
