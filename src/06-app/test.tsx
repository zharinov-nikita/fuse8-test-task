import { sharedUtilGenerateArrayWithUniqueIds } from '@shared'
import { useEffect, useMemo, useState } from 'react'
import { VirtuosoGrid } from 'react-virtuoso'
import styled from 'styled-components'
import css from './test.module.css'

export const List = styled.div<{ startIndex?: number }>`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 24px;
`
export const Item = styled.div<{ startIndex?: number }>`
    background-color: #ccc;
    padding: 24px;
`

export const ItemSkeleton = styled.div`
    background-color: red;
    padding: 24px;
`

export const AppTest = () => {
    const [{ startIndex }, setVisibleRange] = useState({
        startIndex: 0,
        endIndex: 0,
    })

    const listClassName = startIndex === 0 ? css.listPrimary : css.listSecondary
    const itemClassName = startIndex === 0 ? css.itemPrimary : css.itemSecondary

    return (
        <>
            <VirtuosoGrid
                listClassName={listClassName}
                itemClassName={itemClassName}
                style={{ height: 1000, width: 600, marginTop: 100 }}
                rangeChanged={setVisibleRange}
                totalCount={1_000}
                components={{
                    ScrollSeekPlaceholder: ({ height, width }) => (
                        <ItemSkeleton style={{ height, width }} />
                    ),
                }}
                scrollSeekConfiguration={{
                    enter: (velocity) => Math.abs(velocity) > 200,
                    exit: (velocity) => Math.abs(velocity) < 30,
                    change: (_, range) => console.log({ range }),
                }}
                itemContent={(index) => <Item children={index} />}
            />
        </>
    )
}
