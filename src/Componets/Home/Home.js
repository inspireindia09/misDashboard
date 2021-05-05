
import React from 'react';
import { logo, dp, reset } from '../../images'
import { Link } from 'react-router-dom'
import GroupedBar from '../Chart/Chart';
import $ from "jquery";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            objGraphData: {
                labels: ['tvm time', 'framework time'],
                datasets: [
                    {
                        label: 'inference time',
                        data: [20, 100],
                        backgroundColor: 'rgb(54, 162, 235)'
                    }
                ]
            },
            error1: false,
            error2: false,
            error3: false,
            error4: false,
            error5: false,
            error6: false,
            error7: false,
            error8: false,
            error9: false,
            error10: false,
            error11: false,
            error12: false,
            error13: false,
            error14: false,
            error15: false,
            error16: false,
            error17: false,
            error18: false,
            error19: false,
            objNumberThread: {},
            framework: '',
            model_path: {},
            target_device: '',
            tvm_context: '',
            autotune: '',
            rpcconfig: '',
            network_meta: '',
            dtype: '',
            num_threads: '',
            tuner: '',
            n_trials: '',
            early_stopping: '',
            depthwise: '',
            rpc_ip: '',
            rpc_port: '',
            device_key: '',
            port: '',
            test_image_csv: {},
            compare: ''
        }

    }

    formSubmit = () => {
        console.log(this.state.model_path.name)
        if (this.state.framework.trim() === '') {
            this.setState({ error1: true })
        }
        if (this.state.model_path.name === undefined) {
            this.setState({ error2: true })
        }
        if (this.state.target_device.trim() === '') {
            this.setState({ error3: true })
        }
        if (this.state.tvm_context.trim() === '') {
            this.setState({ error4: true })
        }
        if (this.state.autotune.trim() === '') {
            this.setState({ error5: true })
        }
        if (this.state.rpcconfig.trim() === '') {
            this.setState({ error13: true })
        }
        if (this.state.network_meta.trim() === '') {
            this.setState({ error6: true })
        }
        if (this.state.dtype.trim() === '') {
            this.setState({ error7: true })
        }
        if (this.state.num_threads.trim() === '') {
            this.setState({ error8: true })
        }
        if (this.state.tuner.trim() === '') {
            this.setState({ error9: true })
        }
        if (this.state.n_trials.trim() === '') {
            this.setState({ error10: true })
        }
        if (this.state.early_stopping.trim() === '') {
            this.setState({ error11: true })
        }
        if (this.state.depthwise.trim() === '') {
            this.setState({ error12: true })
        }
        if (this.state.rpc_ip.trim() === '') {
            this.setState({ error14: true })
        }
        if (this.state.rpc_port.trim() === '') {
            this.setState({ error15: true })
        }
        if (this.state.device_key.trim() === '') {
            this.setState({ error16: true })
        }
        if (this.state.port.trim() === '') {
            this.setState({ error17: true })
        }
        if (this.state.test_image_csv.name === undefined) {
            this.setState({ error18: true })
        }
        if (this.state.compare.trim() === '') {
            this.setState({ error19: true })
        }
        var formdata = new FormData();
        formdata.append("framework", this.state.framework);
        formdata.append("model_path", this.state.model_path, this.state.model_path.name);
        formdata.append("target_device", this.state.target_device);
        formdata.append("tvm_context", this.state.tvm_context);
        formdata.append("autotune_flag", this.state.autotune);
        formdata.append("network_meta", this.state.network_meta);
        formdata.append("dtype", this.state.dtype);
        formdata.append("num_threads", this.state.num_threads);
        formdata.append("tuner", this.state.tuner);
        formdata.append("n_trials", this.state.n_trials);
        formdata.append("early_stopping", this.state.early_stopping);
        formdata.append("depthwise", this.state.depthwise);
        formdata.append("rpc_flag", this.state.rpcconfig);
        formdata.append("rpc_ip", this.state.rpc_ip);
        formdata.append("rpc_port", this.state.rpc_port);
        formdata.append("device_key", this.state.device_key);
        formdata.append("port", this.state.port);
        formdata.append("test_image_csv", this.state.test_image_csv, this.state.test_image_csv.name);
        formdata.append("compare", this.state.compare);
        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };
        if (this.state.framework !== '' && this.state.model_path.name !== undefined && this.state.target_device !== ''
            && this.state.tvm_context !== '' && this.state.autotune !== '' && this.state.rpcconfig !== '' && this.state.test_image_csv.name !== undefined && this.state.compare !== '') {
            if (this.state.autotune === 'true' && this.state.rpcconfig === 'false') {
                if (this.state.network_meta !== ''
                    && this.state.dtype !== '' && this.state.num_threads !== '' && this.state.tuner !== '' && this.state.n_trials !== '' &&
                    this.state.early_stopping !== '' && this.state.depthwise !== '') {
                    console.log('auto tune true rpc false')

                    fetch("http://127.0.0.1:5060/get_op", requestOptions)
                        .then(response => response.text())
                        .then(result => console.log(result))
                        .catch(error => console.log('error', error));
                }
            } else if (this.state.autotune === 'false' && this.state.rpcconfig === 'true') {
                if (this.state.rpc_ip !== '' && this.state.rpc_port !== '') {
                    console.log('auto tune false rpc true')

                    fetch("http://127.0.0.1:5060/get_op", requestOptions)
                        .then(response => response.text())
                        .then(result => console.log(result))
                        .catch(error => console.log('error', error));
                }
            } else if (this.state.autotune === 'true' && this.state.rpcconfig === 'true') {
                if (this.state.rpc_ip !== '' && this.state.rpc_port !== '' && this.state.network_meta !== ''
                    && this.state.dtype !== '' && this.state.num_threads !== '' && this.state.tuner !== '' && this.state.n_trials !== '' &&
                    this.state.early_stopping !== '' && this.state.depthwise !== '') {
                    console.log('auto tune true rpc true')

                    fetch("http://127.0.0.1:5060/get_op", requestOptions)
                        .then(response => response.text())
                        .then(result => console.log(result))
                        .catch(error => console.log('error', error));

                }
            } else {
                console.log('auto tune false rpc false')

                fetch("http://127.0.0.1:5060/get_op", requestOptions)
                    .then(response => response.text())
                    .then(result => console.log(result))
                    .catch(error => console.log('error', error));
            }
        }
    }
    componentDidMount() {

        let obj = {
            array: []
        };
        for (var l = 0; l < 64; l++) {
            obj.array[l] = l + 1;
        }

        console.log("obj: ", obj);
        this.setState({
            objNumberThread: obj
        })
        if (window.localStorage.getItem("isLogin") === 'true') {
            console.log('logged in')
        } else {
            this.props.history.push('/')
        }
    }
    onChangeAutoTune = (e) => {
        this.setState({
            autotune: e.target.value
        })
        if (e.target.value.trim() === '') {
            this.setState({ error5: true })
        } else {
            this.setState({ error5: false })
        }
    }
    onChangeRpcConfig = (e) => {
        this.setState({
            rpcconfig: e.target.value
        })
        if (e.target.value.trim() === '') {
            this.setState({ error13: true })
        } else {
            this.setState({ error13: false })
        }
    }
    frameworkSelect = (e) => {
        this.setState({ framework: e.target.value })
        if (e.target.value.trim() === '') {
            this.setState({ error1: true })
        } else {
            this.setState({ error1: false })
        }
    }
    logout = () => {
        window.localStorage.removeItem('isLogin')
        this.props.history.push('/')
    }
    onReset = () => {
        $('input, select').val('');
        this.setState({
            error1: false,
            error2: false,
            error3: false,
            error4: false,
            error5: false,
            error6: false,
            error7: false,
            error8: false,
            error9: false,
            error10: false,
            error11: false,
            error12: false,
            error13: false,
            error14: false,
            error15: false,
            error16: false,
            error17: false,
            error18: false,
            error19: false,
            framework: '',
            model_path: {},
            target_device: '',
            tvm_context: '',
            autotune: '',
            rpcconfig: '',
            network_meta: '',
            dtype: '',
            num_threads: '',
            tuner: '',
            n_trials: '',
            early_stopping: '',
            depthwise: '',
            rpc_ip: '',
            rpc_port: '',
            device_key: '',
            port: '',
            test_image_csv: {},
            compare: ''
        })
    }
    handleCallback = (e) => {
        const files = Array.from(e.target.files)
        this.setState({
            model_path: files[0]
        })
        if (files[0].name === undefined) {
            this.setState({ error2: true })
        } else {
            this.setState({ error2: false })
        }
        console.log("files:", files[0])
    }
    targetDevice = (e) => {
        this.setState({ target_device: e.target.value })
        if (e.target.value.trim() === '') {
            this.setState({ error3: true })
        } else {
            this.setState({ error3: false })
        }

    }
    tvmContext = (e) => {
        this.setState({ tvm_context: e.target.value })
        if (e.target.value.trim() === '') {
            this.setState({ error4: true })
        } else {
            this.setState({ error4: false })
        }

    }
    networkMeta = (e) => {
        this.setState({ network_meta: e.target.value })

        if (e.target.value.trim() === '') {
            this.setState({ error6: true })
        } else {
            this.setState({ error6: false })
        }

    }
    dtype = (e) => {
        this.setState({ dtype: e.target.value })

        if (e.target.value.trim() === '') {
            this.setState({ error7: true })
        } else {
            this.setState({ error7: false })
        }

    }
    numThreads = (e) => {
        this.setState({ num_threads: e.target.value })

        if (e.target.value.trim() === '') {
            this.setState({ error8: true })
        } else {
            this.setState({ error8: false })
        }

    }
    tuner = (e) => {
        this.setState({ tuner: e.target.value })
        if (e.target.value.trim() === '') {
            this.setState({ error9: true })
        } else {
            this.setState({ error9: false })
        }

    }
    nTrials = (e) => {
        this.setState({ n_trials: e.target.value })
        if (e.target.value.trim() === '') {
            this.setState({ error10: true })
        } else {
            this.setState({ error10: false })
        }

    }
    earlyStopping = (e) => {
        this.setState({ early_stopping: e.target.value })
        if (e.target.value.trim() === '') {
            this.setState({ error11: true })
        } else {
            this.setState({ error11: false })
        }

    }
    depthwise = (e) => {
        this.setState({ depthwise: e.target.value })
        if (e.target.value.trim() === '') {
            this.setState({ error12: true })
        } else {
            this.setState({ error12: false })
        }

    }
    rpcIp = (e) => {
        this.setState({ rpc_ip: e.target.value })
        if (e.target.value.trim() === '') {
            this.setState({ error14: true })
        } else {
            this.setState({ error14: false })
        }

    }
    rpcPort = (e) => {
        this.setState({ rpc_port: e.target.value })
        if (e.target.value.trim() === '') {
            this.setState({ error15: true })
        } else {
            this.setState({ error15: false })
        }

    }
    deviceKey = (e) => {
        this.setState({ device_key: e.target.value })
        if (e.target.value.trim() === '') {
            this.setState({ error16: true })
        } else {
            this.setState({ error16: false })
        }

    }
    port = (e) => {
        this.setState({ port: e.target.value })
        if (e.target.value.trim() === '') {
            this.setState({ error17: true })
        } else {
            this.setState({ error17: false })
        }

    }
    testImageCsv = (e) => {
        const Imgfiles = Array.from(e.target.files)
        this.setState({
            test_image_csv: Imgfiles[0]
        })

        console.log("files:", Imgfiles[0])
        if (Imgfiles[0].name === undefined) {
            this.setState({ error18: true })
        } else {
            this.setState({ error18: false })
        }

    }
    compare = (e) => {
        this.setState({ compare: e.target.value })
        if (e.target.value.trim() === '') {
            this.setState({ error19: true })
        } else {
            this.setState({ error19: false })
        }
    }

    render() {
        const { error1, error2, error3, error4, error5, error6, error7, error8, error9, error10, error11, error12, error13, error14, error15, error16, error17, error18, error19, objNumberThread } = this.state
        return (
            <div className="page_wrap">
                <nav className="navbar navbar-light bg-white justify-content-between">
                    <div className="navbar-brand">
                        <img src={logo.default} alt="logo" />
                        <span className="title_text">Optimiser</span>
                    </div>
                    <form className="form-inline">
                        <div className="name_display">
                            <h4>Prapti TRIVEDI</h4>
                            <Link onClick={this.logout}>Logout</Link>
                        </div>
                        <img src={dp.default} alt="logo" />
                    </form>
                </nav>
                <div className="row">
                    <div className="col-sm-4 query_block">
                        <div className="form-group">
                            <div className="select_wrap">
                                <label>Framework<span className="text-danger">*</span></label>
                                <select className="form-control" onChange={this.frameworkSelect}>
                                    <option value={""}>Select</option>
                                    <option value={"tensorflow"}>Tensorflow</option>
                                    <option value={"tflite"}>Tflite</option>
                                    <option value={"pytorch"}>Pytorch</option>
                                    <option value={"keras"}>Keras</option>
                                    <option value={"mxnet"}>Mxnet</option>
                                    <option value={"onnx"}>Onnx</option>
                                </select>
                                {error1 ?
                                    <p className="text-danger">This is Required.</p> : null}
                            </div>
                            <div className="select_wrap">
                                <div>
                                    <label>Model to optimise<span className="text-danger">*</span></label>
                                    <input className="form-control choose" type="file" onChange={this.handleCallback} />
                                    {error2 ?
                                        <p className="text-danger">This is Required.</p> : null}
                                </div>
                                {/* <button className="btn">UPLOAD</button> */}
                            </div>
                            <div className="select_wrap">
                                <label>Target Device<span className="text-danger">*</span></label>
                                <select className="form-control" onChange={this.targetDevice}>
                                    <option value={""}>Select</option>
                                    <option value={"llvm"}>Llvm</option>
                                    <option value={"cuda"}>Cuda</option>
                                    <option value={"rasp3b"}>Rasp3b</option>
                                    <option value={"rasp4b"}>Rasp4b</option>
                                </select>
                                {error3 ?
                                    <p className="text-danger">This is Required.</p> : null}
                            </div>
                            <div className="select_wrap">
                                <label>TVM Context<span className="text-danger">*</span></label>
                                <select className="form-control" onChange={this.tvmContext}>
                                    <option value={""}>Select</option>
                                    <option value={"cpu"}>Cpu</option>
                                    <option value={"gpu"}>Gpu</option>
                                </select>
                                {error4 ?
                                    <p className="text-danger">This is Required.</p> : null}
                            </div>
                            <div className="select_wrap">
                                <label>Autotune Flag<span className="text-danger">*</span></label>
                                <select className="form-control" onChange={this.onChangeAutoTune} value={this.state.autotune}>
                                    <option value={""}>Select</option>
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </select>
                                {error5 ?
                                    <p className="text-danger">This is Required.</p> : null}
                            </div>
                            {this.state.autotune === 'true' ?
                                <div className="autotune_config">
                                    <label className="config_label">autotune config</label>
                                    <div className="select_wrap">
                                        <label>Log file name<span className="text-danger">*</span></label>
                                        <input className="form-control" type="text" onChange={this.networkMeta} />
                                        {error6 ?
                                            <p className="text-danger">This is Required.</p> : null}
                                    </div>
                                    <div className="select_wrap">
                                        <label>Datatype<span className="text-danger">*</span></label>
                                        <select className="form-control" onChange={this.dtype}>
                                            <option value={""}>Select</option>
                                            <option value={"int8"}>Int8</option>
                                            <option value={"float32"}>Float32</option>
                                            <option value={"float16"}>Float16</option>
                                        </select>
                                        {error7 ?
                                            <p className="text-danger">This is Required.</p> : null}
                                    </div>
                                    <div className="select_wrap">
                                        <label>Number of threads<span className="text-danger">*</span></label>

                                        <select className="form-control" onChange={this.numThreads}>
                                            <option value={""}>Select</option>
                                            {objNumberThread.array.map((item) => <option key={item}>{item}</option>
                                            )}
                                        </select>
                                        {error8 ?
                                            <p className="text-danger">This is Required.</p> : null}
                                    </div>
                                    <div className="select_wrap">
                                        <label>Tuner<span className="text-danger">*</span></label>
                                        <select className="form-control" onChange={this.tuner}>
                                            <option value={""}>Select</option>
                                            <option value={"xgb"}>Xgb</option>
                                            <option value={"random"}>Random</option>
                                            <option value={"ga"}>Ga</option>
                                            <option value={"gridsearch"}>Gridsearch</option>
                                            <option value={"xgb-knob"}>Xgb-knob</option>
                                        </select>
                                        {error9 ?
                                            <p className="text-danger">This is Required.</p> : null}
                                    </div>
                                    <div className="select_wrap">
                                        <label>Number of trials<span className="text-danger">*</span></label>
                                        <input className="form-control" type="number" onChange={this.nTrials} />
                                        {error10 ?
                                            <p className="text-danger">This is Required.</p> : null}
                                    </div>
                                    <div className="select_wrap">
                                        <label>Early Stopping steps<span className="text-danger">*</span></label>
                                        <input className="form-control" type="number" onChange={this.earlyStopping} />
                                        {error11 ?
                                            <p className="text-danger">This is Required.</p> : null}
                                    </div>
                                    <div className="select_wrap">
                                        <label>Depthwise<span className="text-danger">*</span></label>
                                        <select className="form-control" onChange={this.depthwise}>
                                            <option value={""}>Select</option>
                                            <option value="true">True</option>
                                            <option value="false">False</option>
                                        </select>
                                        {error12 ?
                                            <p className="text-danger">This is Required.</p> : null}
                                    </div>
                                </div> : null}
                            <div className="select_wrap">
                                <label>RPC Flag<span className="text-danger">*</span></label>
                                <select className="form-control" onChange={this.onChangeRpcConfig} value={this.state.rpcconfig}>
                                    <option value={""}>Select</option>
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </select>
                                {error13 ?
                                    <p className="text-danger">This is Required.</p> : null}
                            </div>
                            <div className="select_wrap">
                                <label>RPC IP Address<span className="text-danger">*</span></label>
                                <input className="form-control" type="text" onChange={this.rpcIp} />
                                {error14 ?
                                    <p className="text-danger">This is Required.</p> : null}
                            </div>
                            <div className="select_wrap">
                                <label>RPC Port<span className="text-danger">*</span></label>
                                <input className="form-control" type="text" onChange={this.rpcPort} />
                                {error15 ?
                                    <p className="text-danger">This is Required.</p> : null}
                            </div>
                            {this.state.autotune === 'true' && this.state.rpcconfig === 'true' ?
                                <div className="autotune_config">
                                    <label className="config_label">rpc config</label>
                                    <div className="select_wrap">
                                        <label>Device Key<span className="text-danger">*</span></label>
                                        <input className="form-control" type="text" onChange={this.deviceKey} />
                                        {error16 ?
                                            <p className="text-danger">This is Required.</p> : null}
                                    </div>
                                    <div className="select_wrap">
                                        <label>Port<span className="text-danger">*</span></label>
                                        <input className="form-control" type="number" onChange={this.port} />
                                        {error17 ?
                                            <p className="text-danger">This is Required.</p> : null}
                                    </div>
                                </div> : null}
                            <div className="select_wrap">
                                <label>Test images<span className="text-danger">*</span></label>
                                <input className="form-control choose" type="file" onChange={this.testImageCsv} />
                                {error18 ?
                                    <p className="text-danger">This is Required.</p> : null}
                            </div>
                            <div className="select_wrap">
                                <label>Compare inference speed<span className="text-danger">*</span></label>
                                <select className="form-control" onChange={this.compare}>
                                    <option value={""}>Select</option>
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </select>
                                {error19 ?
                                    <p className="text-danger">This is Required.</p> : null}
                            </div>
                            <div className="button_wrap">
                                <button className="btn" onClick={this.onReset}>
                                    <img src={reset.default} alt="reset" />
                                    RESET
                                    </button>
                                <button className="btn" onClick={this.formSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8 graph_block">
                        <div className="chart_wrap">
                            <GroupedBar graphData={this.state.objGraphData} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;