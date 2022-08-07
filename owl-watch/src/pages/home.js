import { Card } from '../Components/Cards';

function Home() {
    return (
        <div className="wrapper">
            <Card
                project="Circles"
                description="An introduction to Python programming and computational problem solving."
            />
            <Card
                project="Spot it!"
                description="Solving more complex problems using mathematics and computation."
            />
            <Card
                project="Stock Prediction"
                description="Using Markov models to analyze and predict the behavior of the stock market."
            />
            <Card
                project="Actor/Movie Relationships"
                description="Using graph theory to analyze relationships between actors and movies."
            />
            <Card
                project="QR Codes"
                description="Using error correcting codes to develop robust machine readable images.    "
            />
            <Card
                project="Sports Analytics"
                description="Analyzing and predicting baseball team performance."
            />
            <Card
                project="Maps"
                description="Searching for and finding good routes."
            />
        </div>
    )
}

export default Home;