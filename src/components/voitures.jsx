import { useState } from 'react';

function Voitures() {
  const [voitures, setVoitures] = useState([
    {
      id: 'V1',
      marque: 'dacia Logan',
      typeCarburant: 'Diesel',
      prix: 200,
      imageUrl: 'https://cdn.motor1.com/images/mgl/qR9zN/s3/dacia-logan-2021.jpg',
    },
    {
      id: 'V2',
      marque: 'peugeot 208',
      typeCarburant: 'essence',
      prix: 400,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Peugeot_208_Active_PureTech',
    },
  ]);

  const [id, setId] = useState('');
  const [marque, setMarque] = useState('');
  const [typeCarburant, setTypeCarburant] = useState('');
  const [prix, setPrix] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const nouvelleVoiture = {
      id,
      marque,
      typeCarburant,
      prix: Number(prix),
      imageUrl,
    };

    setVoitures((prev) => [...prev, nouvelleVoiture]);
    setId('');
    setMarque('');
    setTypeCarburant('');
    setPrix('');
    setImageUrl('');
  };

  const supprimerVoiture = (idToDelete) => {
    setVoitures((prev) => prev.filter((v) => v.id !== idToDelete));
  };

  return (
    <div className='container mt-4'>
      <h1 className='text-center mb-4'>gestion des voitures de location</h1>
      <h3>Ajouter une voiture</h3>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-control mb-3'
          placeholder='Marque'
          value={marque}
          onChange={(e) => setMarque(e.target.value)}
          required
        />
        <input
          type='number'
          className='form-control mb-3'
          placeholder='Prix de location'
          value={prix}
          onChange={(e) => setPrix(e.target.value)}
          required
        />
        <input
          type='text'
          className='form-control mb-3'
          placeholder='Type de carburant'
          value={typeCarburant}
          onChange={(e) => setTypeCarburant(e.target.value)}
          required
        />
        <input
          type='text'
          className='form-control mb-3'
          placeholder='ID'
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <input
          type='text'
          className='form-control mb-3'
          placeholder='Image URL'
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
        <button type='submit' className='btn btn-primary'>
          ajouter
        </button>
      </form>

      <h3 className='mt-5'>liste des voitures</h3>
      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Marque</th>
            <th>Carburant</th>
            <th>Prix</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {voitures.map((v) => (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.marque}</td>
              <td>{v.typeCarburant}</td>
              <td>{v.prix} dhs</td>
              <td>
                <img
                  src={v.imageUrl}
                  alt={v.marque}
                  width='120'
                  height='75'
                  style={{ objectFit: 'cover' }}
                />
              </td>
              <td>
                <button
                  type='button'
                  className='btn btn-danger'
                  onClick={() => supprimerVoiture(v.id)}
                >
                  supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Voitures;
