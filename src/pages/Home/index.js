import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
   return (
      <ProductList>
         <li>
            <img
               src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-creation-21-masculino/42/D16-5429-042/D16-5429-042_zoom2.jpg?ts=1588782638&ims=326x"
               alt="Tenis"
            />
            <strong>Nome do produto</strong>
            <span>R$ 10,50</span>

            <button type="button">
               <div>
                  <MdAddShoppingCart size={16} color="#fff" />3
               </div>{' '}
               <span>ADICIONAR AO CARRINHO</span>
            </button>
         </li>

         <li>
            <img
               src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-creation-21-masculino/42/D16-5429-042/D16-5429-042_zoom2.jpg?ts=1588782638&ims=326x"
               alt="Tenis"
            />
            <strong>Nome do produto</strong>
            <span>R$ 10,50</span>

            <button type="button">
               <div>
                  <MdAddShoppingCart size={16} color="#fff" />3
               </div>{' '}
               <span>ADICIONAR AO CARRINHO</span>
            </button>
         </li>

         <li>
            <img
               src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-creation-21-masculino/42/D16-5429-042/D16-5429-042_zoom2.jpg?ts=1588782638&ims=326x"
               alt="Tenis"
            />
            <strong>Nome do produto</strong>
            <span>R$ 10,50</span>

            <button type="button">
               <div>
                  <MdAddShoppingCart size={16} color="#fff" />3
               </div>{' '}
               <span>ADICIONAR AO CARRINHO</span>
            </button>
         </li>

         <li>
            <img
               src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-creation-21-masculino/42/D16-5429-042/D16-5429-042_zoom2.jpg?ts=1588782638&ims=326x"
               alt="Tenis"
            />
            <strong>Nome do produto</strong>
            <span>R$ 10,50</span>

            <button type="button">
               <div>
                  <MdAddShoppingCart size={16} color="#fff" />3
               </div>
               <span>ADICIONAR AO CARRINHO</span>
            </button>
         </li>

         <li>
            <img
               src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-creation-21-masculino/42/D16-5429-042/D16-5429-042_zoom2.jpg?ts=1588782638&ims=326x"
               alt="Tenis"
            />
            <strong>Nome do produto</strong>
            <span>R$ 10,50</span>

            <button type="button">
               <div>
                  <MdAddShoppingCart size={16} color="#fff" />3
               </div>{' '}
               <span>ADICIONAR AO CARRINHO</span>
            </button>
         </li>
      </ProductList>
   );
}
