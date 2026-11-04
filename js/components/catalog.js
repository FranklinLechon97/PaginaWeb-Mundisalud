// Componentes que construyen tarjetas a partir de los catálogos.
import { services } from "../data/services.js";
import { plans } from "../data/plans.js";
import { icon, btn, link } from "./ui.js";

export const serviceTiles=()=>`<div class="ms-grid">${services.map(s=>`<article class="ms-tile"><span class="ms-icon">${icon(s.icon)}</span><h3>${s.name}</h3><p>${s.desc}</p>${link('Ver servicio','servicio-'+s.id)}</article>`).join('')}</div>`;

export const planTiles=(full=false)=>`<div class="ms-grid">${plans.map((p,i)=>`<article class="ms-tile ms-plan ${i===1?'focus':''}"><span class="ms-eyebrow">${p.tag}</span><h3>Plan ${p.name}</h3><div class="ms-price">$${p.price} <small>/ mes</small></div><ul>${(full?p.items:p.items.slice(0,3)).map(x=>`<li>${x}</li>`).join('')}</ul>${btn('Conocer beneficios','plan-'+p.id,i===1?'':'alt')}</article>`).join('')}</div>`;

export const businessBanner=()=>`<div class="ms-banner"><div><span class="ms-tag">Salud ocupacional</span><h2>El bienestar de tu equipo también cuenta.</h2><p>Evaluaciones, laboratorio, brigadas y programas de prevención según las necesidades de tu empresa.</p>${btn('Conocer soluciones empresariales','empresas','light')}</div><div><span class="ms-icon">${icon('truck')}</span><h3 style="color:white">Atención que se acerca</h3><p>Consulta nuestras opciones de brigadas y unidad móvil.</p></div></div>`;
