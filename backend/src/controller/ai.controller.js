const aiService = require('../services/ai.service');

const getResponse = async(req,res)=>{
    try {
        const prompt = req.query.prompt;
        if(!prompt){
            return res.status(400).send({
                success:false,
                message : "Prompt is required"
            })
        }
        const response = await aiService.generateContent(prompt);
        return res.status(200).send({
            success:true,
            message:`Response :${response}`
        })
    } catch (error) {
        console.error("Error generating response:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while processing your request."
        });
    }
}


const getReview = async (req, res) => {
    try {
        const  code  = req.body.code; // Extract code from request body

        if (!code) {
            return res.status(400).json({
                success: false,
                message: "Code is required"
            });
        }

        // Call AI service to review the code
        const review = await aiService.generateContent(`Review this code:\n${code}`);

        return res.send(review); 

    } catch (error) {
        console.error("Error in getReview:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

module.exports = { getResponse, getReview };