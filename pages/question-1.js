import { Table, Tag } from 'antd';
import Head from 'next/head'

const columns = [
  {title: 'ID', dataIndex: 'id' },
  {title: 'Category', dataIndex: 'category' },
  {title: 'Title', dataIndex: 'title' },
  {title: 'Description', dataIndex: 'description' },
  {title: 'Footer', dataIndex: 'footer' },
  {title: 'Tags', dataIndex: 'tags',
    render:(text, record) => (
      <ul>
        {(record.tags && record.tags.length > 0) && record.tags.map((tag, index) => (
          <li key={tag+index}>
            <Tag color="blue" >
              {tag}
            </Tag>
          </li>
        ))}
      </ul>
    )
  }
];

export default function q1({data}) {
  return (
    <>
      <Head>
        <title>Interview - Question 1</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 style={{textAlign: 'left'}}>    
        Question 1
      </h2>
      <Table rowKey='id' pagination={{defaultPageSize: 5, position:['bottom', 'left']}} columns={columns} dataSource={data} />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://screening.moduit.id/frontend/web/question/one')
  const data = await res.json()

  return {
    props: {
      data
    },
  }
}