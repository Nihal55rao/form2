import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { PrismaClient } from '@prisma/client'
import React from 'react'
import { useState } from 'react'


const prisma = new PrismaClient()

const inter = Inter({ subsets: ['latin'] })

export default function Table({data}) {
  const [employee, setEmployees] = useState(data)
 
  return (
    
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
       <h1>This is table page</h1>


        <table border={1}>
          <tbody>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Role</td>
              <td>Phone Number</td>
              <td>Email</td>
              <td>Age</td>
            </tr>
          </tbody>
          {employee.map((item) => 
            <tr key ="item.id">

              <td><strong>{item.id}</strong></td>
              <td>{item.name}</td>
              <td>{item.role}</td>
              <td>{item.phone_number}</td>
              <td>{item.email}</td>
              <td>{item.age}</td>
            </tr>
          )}
        </table>
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps(){

  const employee = await prisma.employees.findMany()

  return {
    props: {
      data: employee
    }
  }
}