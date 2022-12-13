import React from 'react';
import style from './Recipe.module.css';

const Recipe = ({nama,deskripsi,gambar}) => {
    return(
      <div className={style.Recipe}>
          <img className={style.Image} src={gambar} alt=""/><br></br>
          <p className={style.textSize}><h3>{nama}</h3><b>Komposisi :</b><br></br>{deskripsi}</p>
      </div>
    );
}

export  default Recipe;