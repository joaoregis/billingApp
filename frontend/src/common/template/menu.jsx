import React from 'react'
import MenuItem from './menuitem'
import MenuTree from './menutree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem href='#' icon='dashboard' label='Dashboard' />
        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem href='#billingcycles' icon='usd' label='Ciclos de Pagamento'/>
        </MenuTree>
    </ul>
)