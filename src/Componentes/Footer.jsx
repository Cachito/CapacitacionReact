import { Component } from 'react';

export class Footer extends Component {
    render() {
        return (
            <footer className="container py-5">
                <div className="row">
                    <div className="col-12 col-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="d-block mb-2"
                            role="img"
                            viewBox="0 0 24 24"
                        >
                        <title>Product</title>
                        <circle cx="12" cy="12" r="10" />
                        <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
                        </svg>
                        <small className="d-block mb-3 text-muted">&copy; 2021</small>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Features</h5>
                        <ul className="list-unstyled text-small">
                            <li>
                                <a target="...blank" className="link-secondary" href="http://news2.globalnewsgroup.com">
                                    Cool stuff
                                </a>
                            </li>
                            <li>
                                <a target="...blank" className="link-secondary" href="http://news2.globalnewsgroup.com">
                                    Random feature
                                </a>
                            </li>
                            <li>
                                <a target="...blank"className="link-secondary" href="http://news2.globalnewsgroup.com">
                                    Team feature
                                </a>
                            </li>
                            <li>
                                <a target="...blank"className="link-secondary" href="http://news2.globalnewsgroup.com">
                                    Stuff for developers
                                </a>
                            </li>
                            <li>
                                <a target="...blank"className="link-secondary" href="http://news2.globalnewsgroup.com">
                                    Another one
                                </a>
                            </li>
                            <li>
                                <a target="...blank"className="link-secondary" href="http://news2.globalnewsgroup.com">
                                    Last time
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Resources</h5>
                        <ul className="list-unstyled text-small">
                            <li>
                                <a target="...blank"className="link-secondary" href="http://news2.globalnewsgroup.com">
                                    Resource name
                                </a>
                            </li>
                            <li>
                                <a target="...blank"className="link-secondary" href="http://news2.globalnewsgroup.com">
                                    Resource
                                </a>
                            </li>
                            <li>
                                <a target="...blank"className="link-secondary" href="http://news2.globalnewsgroup.com">
                                    Another resource
                                </a>
                            </li>
                            <li>
                                <a target="...blank"className="link-secondary" href="http://news2.globalnewsgroup.com">
                                    Final resource
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Resources</h5>
                        <ul className="list-unstyled text-small">
                            <li>
                                <a target="...blank"className="link-secondary" href="http://news2.globalnewsgroup.com">
                                    Business
                                </a>
                            </li>
                            <li>
                                <a target="...blank"className="link-secondary" href="http://news2.globalnewsgroup.com">
                                    Education
                                </a>
                            </li>
                            <li>
                                <a target="...blank"className="link-secondary" href="http://news2.globalnewsgroup.com">
                                    Government
                                </a>
                            </li>
                            <li>
                                <a target="...blank"className="link-secondary" href="http://news2.globalnewsgroup.com">
                                    Gaming
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>About</h5>
                        <ul className="list-unstyled text-small">
                            <li>
                                <a target="...blank"className="link-secondary" href="http://news2.globalnewsgroup.com">
                                    Team
                                </a>
                            </li>
                            <li>
                                <a target="...blank"className="link-secondary" href="http://news2.globalnewsgroup.com">
                                    Locations
                                </a>
                            </li>
                            <li>
                                <a target="...blank"className="link-secondary" href="http://news2.globalnewsgroup.com">
                                    Privacy
                                </a>
                            </li>
                            <li>
                                <a target="...blank"className="link-secondary" href="http://news2.globalnewsgroup.com">
                                    Terms
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}