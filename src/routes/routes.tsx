import type { Component } from "solid-js";
import { lazy } from "solid-js";
import { Router, Routes, Route, Navigate, hashIntegration } from "@solidjs/router";
import SideNave from "../shared/components/sidenave/sidenave";

const pathFn = () => {
    return '/dashboard';
}
const DashboardPage = lazy(() => import('../pages/dashboard-page/dashboard-page'))
const PemasukanPage = lazy(() => import('../pages/pemasukan-page/pemasukan-page'))
const ReportPage = lazy(() => import('../pages/report-page/report-page'))

const Root: Component = () => {
    return (
        <>
            <Router source={hashIntegration()}>
                <div class="flex">
                    <SideNave />
                    <Routes>
                        <Route path="/" component={() => <Navigate href={pathFn()} />} />
                        <Route path="/dashboard" component={DashboardPage} />
                        <Route path="/pemasukan" component={PemasukanPage} />
                        <Route path="/report" component={ReportPage} />
                    </Routes>
                </div>


            </Router>
        </>
    )
}
export default Root