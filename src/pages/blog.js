import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/Layout'
export default function blog() {
    return (
        <Layout>
            Hello from blog page.<Link to="/">back home</Link>
        </Layout>
    )
}
