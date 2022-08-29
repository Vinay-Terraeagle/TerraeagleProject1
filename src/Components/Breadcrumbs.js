import React from 'react'
import {NavLink } from 'react-router-dom'

export default function Breadcrumbs(props) {
    const breadcrumbNav = {
        padding: '0px',
        background: 'none'
    }
    function isLast(index) {
        return index === props.crumbs.length - 1;
    }
    return (
        <nav className="row justify-content-center " style={ breadcrumbNav }>
            <ol className="breadcrumb">
            {
                props.crumbs.map((crumb, ci) => {
                const disabled = isLast(ci) ? 'disabled' : '';
                
                return (
                    <li
                    key={ ci }
                    className="breadcrumb-item align-items-center d-flex"
                    >
                    {/* <button className={ `btn btn-link ${ disabled }` } onClick={ () => props.selected(crumb) }>
                        { crumb }
                    </button> */}



                    <NavLink to={`/${crumb}`} className={ `btn btn-link ${ disabled }` } onClick={ () => props.selected(crumb) }>{ crumb }</NavLink>
                    </li>
                );
                })
            }
            </ol>
        </nav>
    )
}
