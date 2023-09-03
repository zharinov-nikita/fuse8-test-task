import { sharedUtilGenerateArrayWithUniqueIds } from '@shared'
import css from '../jokes-list/jokes-list.module.css'
import { S } from './jokes-loading.styled'
import { usePageJokesStore } from '../../jokes.store'

export const UiJokesLoading = () => {
    const { isLoading } = usePageJokesStore((s) => s)
    return (
        <>
            {isLoading && (
                <div className={css.listPrimary}>
                    {sharedUtilGenerateArrayWithUniqueIds(30).map(({ id }) => (
                        <S.JokeSkeleton className={css.itemPrimary} key={id} />
                    ))}
                </div>
            )}
        </>
    )
}
