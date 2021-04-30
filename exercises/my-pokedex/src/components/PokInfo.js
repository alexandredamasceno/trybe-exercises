import React from 'react';

class PokInfo extends React.Component {
    render() {
        const { pokemon } = this.props;
        const { name, type, averageWeight: { value, measurementUnit }, image } = pokemon;
        return (
            <div className="pokemon-card">
                <div>
                    <h3>{name}</h3>
                    <p>{type}</p>
                    <p>Avarage weight: {value}{measurementUnit}</p>
                </div>
                <img src={image} alt={name}/>
            </div>
        )
    }
}

export default PokInfo;