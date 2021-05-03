type props = {
    title: string,
    url: string
}

export const GiftGridItem = ({title, url}: props) => {

    return (
        <div className={'p-1'}>
            <div className={'card card-size animate__animated animate__fadeIn'}>
                <img className={'card-body'} src={url} alt=""/>
                <p className={'card-footer'}>{title}</p>
            </div>
        </div>
    )
}
