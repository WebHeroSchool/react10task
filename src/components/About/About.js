import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Octokit} from '@octokit/rest';

const octokit = new Octokit ();

class About extends React.Component{
  state = {
    isLoading: true,
    repoList: [],
    fetchFailure: false,
    err: {}
  }

  componentDidMount() {
    octokit.repos.listForUser({
      username: 'x1nax'
    }).then(({data}) => {
      this.setState({
        repoList: data,
        isLoading: false
      });
    }).catch(error => {
      this.setState({
        fetchFailure: true,
        err: error
      });
    });
  }


  render() { 
    const {isLoading, repoList, err, fetchFailure} = this.state;

    return (
      <CardContent>
       <h1>{isLoading ? <CircularProgress /> : 'обо мне'}</h1>
       {fetchFailure && <div>{err.message}</div>}
       {!isLoading && <div>
        <img src={repoList.map(repo => (repo.owner.avatar_url))}></img>
        <ol>
         { repoList.map(repo => (<li key={repo.id}>
          <h1></h1>
           <a href={repo.svn_url}>{repo.name}</a>
         </li>)) }
       </ol>
       </div>
       }
      </CardContent>
      
    );
  }
}



export default About;