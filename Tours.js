import Card from './Card.js';

function Tours({ tours ,removeTourHandler }) {
    return (
        <div className="container">
            <div>
                <h2 className='title'>Plan With Love</h2>
            </div>

            <div className='cards'>
                {
                    tours.map(
                        (tours) => {
                            return <Card {...tours}  removeTourHandler={removeTourHandler}></Card>
                        } )
                }
            </div>

        </div>
    );
}

export default Tours;