import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
        
const Perso = () => {
    // Your component logic goes here
    const [products, setProducts] = useState([]);
 
    return (
        <div>
            {/* Your JSX code goes here */}
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <h1>Espace Perso</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h2>
                            Mon nom : User 120093
                        </h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                    <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                        <Column field="code" header="Code"></Column>
                        <Column field="Subject" header="sujet"></Column>
                        <Column field="category" header="participants"></Column>
                        <Column field="quantity" header="date/heure"></Column>
                    </DataTable>
                    </div>
                </div>

            </div>



        </div>
    );
};

export default Perso;