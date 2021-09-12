import { makeStyles } from '@material-ui/core/styles'; 

export default makeStyles({
    title: {
        color: '#d9d9d9',
        marginBottom: '30px'
    },
    container: {
        backgroundColor: '#1f1f1f',
        borderRadius: '9px',
    },
    titleImage: {
        height: 0,
        paddingTop: '100%',
        backgroundBlendMode: 'normal',
        borderRadius: '9px'
    },
    loading: {
        color: '#d9d9d9',
    },
    loadingContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh'
    },
    detailsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'start'
    },
    details: {
        margin: '20px 0 !important',
    },
    subDetails: {
        display: 'flex',
        flexWrap: 'nowrap',
        margin: '10px 0',
        color: '#d9d9d9 !important',
        alignItems: 'baseline'
    },
    span: {
        backgroundColor: '#4b4b4b',
        borderRadius: '6px',
        padding: '2px'
    },
    moreIcon: {
        color: '#d9d9d9',
        padding: '20px 0'
    },
    iconButton: {
        padding: '10px 0'
    },
    delete: {
        color: '#ed2553'   
    }
})