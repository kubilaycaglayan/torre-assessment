import React from 'react';
import { LOADING_JOB } from '../constants';
import Loading from './Loading';

const Job = props => {
  const { job, loadingState } = props;
  return (
    loadingState === LOADING_JOB
      ? (
        <section className="job">
          <Loading />
        </section>
      )
      : (
        <section className="job">
          <h4>
            Job Description
          </h4>
          <h5>
            { job.objective }
          </h5>
          <h4>
            Organization
          </h4>
          <h5>
            { job.organizations[0] ? job.organizations[0].name : 'Organization could not be found.' }
          </h5>
          <h4>
            Location
          </h4>
          <h5>
            { job.locations[0] }
          </h5>
          <a href={`http://torre.co/jobs/${job.id}`}>
            See job at Torre
          </a>
        </section>
      )
  );
};

export default Job;
