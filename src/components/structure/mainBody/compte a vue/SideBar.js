import React, { Component } from 'react'

export default class SideBar extends Component {
    render() {
        return (
                <div class="d-flex align-items-start">
                    <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button class="hoverperso border rounded-pill border-white nav-link text-white" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Account Summary</button>
                        <button class="hoverperso border rounded-pill border-white nav-link text-white my-4" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Money transfer</button>
                        <button class="hoverperso border rounded-pill border-white nav-link text-white" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
                    </div>
                </div>
        )
    }
}
