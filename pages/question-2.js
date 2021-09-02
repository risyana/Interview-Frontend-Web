import { Table, Tag, Input } from 'antd';
import { useState, useEffect } from 'react'
const {Search} = Input

const columns = [
  {title: 'id', dataIndex: 'id', key: 'id' },
  {title: 'category', dataIndex: 'category', key: 'category' },
  {title: 'title', dataIndex: 'title', key: 'title' },
  {title: 'description', dataIndex: 'description', key: 'description' },
  {title: 'footer', dataIndex: 'footer', key: 'footer' },
  {title: 'tags', dataIndex: 'tags', key: 'tags',
    render:(text, record) => (
      <>
        {(record.tags && record.tags.length > 0) && record.tags.map(tag => (
          <Tag color="blue" key={tag}>
            {tag}
          </Tag>
        ))}
      </>
    )
  }
];

export default function Q2(props) {
  const { data } = props
  const [keyword, setKeyword] = useState('')
  const [filteredData, setFilteredData] = useState(data)

  const filterTable = (originalData, keyword) => {
    const filtered =  keyword 
      ? originalData.filter(d => {
          return (
            d.id && d.id.toString().toUpperCase().includes(keyword.toUpperCase()) ||
            d.category && d.category.toString().toUpperCase().includes(keyword.toUpperCase()) ||
            d.title && d.title.toUpperCase().includes(keyword.toUpperCase()) ||
            d.description && d.description.toUpperCase().includes(keyword.toUpperCase()) ||
            d.footer && d.footer.toUpperCase().includes(keyword.toUpperCase()) ||
            d.tags && d.tags.join(' ').toUpperCase().includes(keyword.toUpperCase())
          )
        })
      : originalData

    setFilteredData(filtered)
  }

  useEffect(() => {
    filterTable(data, keyword)
  }, [keyword, data])

  return (
    <>
      <p>    
        Question 2
      </p>
      <Search placeholder="Search" value={keyword} onChange={(e) => setKeyword(e.target.value)} style={{ width: 200 }} />
      <Table columns={columns} dataSource={filteredData} scroll={{ y: 600 }} />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://screening.moduit.id/frontend/web/question/two')
  const data = await res.json()

  return {
    props: {
      data
    },
  }
}