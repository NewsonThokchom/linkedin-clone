import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

function Sidebar() {

    const recentItem = (topic) => {
        return <div className="sidebar__recentItem" >
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    }

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                <Avatar className='sidebar__avatar' />
                <h2>Newson Thokchom</h2>
                <h4>newsonthokchom@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className='sidebar__statNumber'>1,582</p>
                </div>

                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className='sidebar__statNumber'>4,014</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactJs')}
                {recentItem('programming')}
                {recentItem('softwareEngineering')}
                {recentItem('systemDesign')}
                {recentItem('developer')}
            </div>

        </div>
    )
}

export default Sidebar