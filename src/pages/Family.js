import React, { useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../pages/styles/Family.css';

function Family() {
  const [items, setItems] = useState(['Blockchain', 'ReactJS', 'TypeScript', 'JavaTpoint']);
  const [color, setColor] = useState('blue'); // Définir une couleur par défaut
  const [count, setCount] = useState(0);

  // Ajouter un nouvel élément
  const handleAdd = () => {
    const newItem = prompt('Enter Item Name');
    if (newItem) {
      setItems([...items, newItem]);
      setColor(randomColor()); // Changer la couleur aléatoirement à chaque ajout
    }
  };

  // Supprimer un élément
  const handleRemove = (i) => {
    const newItems = items.slice();
    newItems.splice(i, 1);
    setItems(newItems);
    setColor(randomColor()); // Changer la couleur aléatoirement à chaque suppression
  };

  // Met à jour le compteur toutes les secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(timer); // Nettoie l'intervalle
  }, []);

  // Fonction pour générer une couleur aléatoire
  const randomColor = () => {
    const colors = ['red', 'blue', 'green', 'orange', 'purple', 'pink'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div>
      <h1 style={{ color }}>Animation Example</h1>
      <button className="btn btn-success item-button" onClick={handleAdd}>
        Insert Item
      </button>
      <TransitionGroup>
        {items.map((item, i) => (
          <CSSTransition key={item} timeout={800} classNames="example">
            <div onClick={() => handleRemove(i)}>{item}</div>
          </CSSTransition>
        ))}
      </TransitionGroup>
      <h2 style={{ color }}>My favorite color is {color}!</h2>
      <h2>I've rendered {count} times!</h2>
    </div>
  );
}

export default Family;
