import React, {useContext, useState, useEffect} from 'react'
import { useSnDetailQuery4h, useSnDetailQuery1d, useSnBlockQuery, useSnProofQuery } from '../queries/starkNet';
import { useEthDetailQuery4h, useEthDetailQuery1d } from '../queries/ethereum';
import { FeePanel } from '../components/fee';
import { TxnsPanel } from '../components/transactions';
import { LatencyPanel } from '../components/latency';
import { BlocksPanel } from '../components/blocks';
import { BridgePanel } from '../components/bridge';
import { AppContext } from '../context/AppContext';

const Main: React.FC = () => {
    const { network } = useContext(AppContext)
    const {refetch:snBlockRefetch, isLoading:snBlockLoading, data:snBlockData} = useSnBlockQuery(network);
    const {refetch:snProofRefetch, isLoading:snProofLoading, data:snProofData} = useSnProofQuery(network);
    const {refetch:snDetailRefetch_4h, isLoading:snDetailLoading_4h, data:snDetailData_4h} = useSnDetailQuery4h(network);
    const {refetch:snDetailRefetch_1d, isLoading:snDetailLoading_1d, data:snDetailData_1d} = useSnDetailQuery1d(network);
    const {isLoading:ethDetailLoading_4h, data:ethDetailData_4h} = useEthDetailQuery4h();
    const {isLoading:ethDetailLoading_1d, data:ethDetailData_1d} = useEthDetailQuery1d();
    const [timeFrame_feePanel, setTimeFrame_feePanel] = useState<string>('4h');
    const [timeFrame_txnsPanel, setTimeFrame_txnsPanel] = useState<string>('4h');
    const [timeFrame_latencyPanel, setTimeFrame_latencyPanel] = useState<string>('4h');
    const [timeFrame_blockPanel, setTimeFrame_blockPanel] = useState<string>('4h');
    const [timeFrame_bridgePanel, setTimeFrame_bridgePanel] = useState<string>('4h');

    useEffect(() => { 
        snBlockRefetch();
        snProofRefetch();
        snDetailRefetch_4h();
        snDetailRefetch_1d();
    }, [network])

    return (
        <div className="min-h-screen">
            <div className="py-14 2xl:py-20">
                <FeePanel ethDetailLoading = {timeFrame_feePanel === '4h' ? ethDetailLoading_4h : ethDetailLoading_1d } 
                    ethDetailData = {timeFrame_feePanel === '4h' ? ethDetailData_4h : ethDetailData_1d } 
                    snDetailLoading = {timeFrame_feePanel === '4h' ? snDetailLoading_4h : snDetailLoading_1d } 
                    snDetailData = {timeFrame_feePanel === '4h' ? snDetailData_4h : snDetailData_1d } 
                    snBlockData = {snBlockData} 
                    snBlockLoading = {snBlockLoading}
                    timeFrame = {timeFrame_feePanel}
                    setTimeFrame = {setTimeFrame_feePanel}
                />
            </div>
            <div className="py-14 2xl:py-20">
                <BridgePanel ethDetailLoading = {timeFrame_bridgePanel === '4h' ? ethDetailLoading_4h : ethDetailLoading_1d } 
                    ethDetailData = {timeFrame_bridgePanel === '4h' ? ethDetailData_4h : ethDetailData_1d } 
                    snDetailLoading = {timeFrame_bridgePanel === '4h' ? snDetailLoading_4h : snDetailLoading_1d } 
                    snDetailData = {timeFrame_bridgePanel === '4h' ? snDetailData_4h : snDetailData_1d } 
                    snBlockData = {snBlockData} 
                    snBlockLoading = {snBlockLoading}
                    timeFrame = {timeFrame_bridgePanel}
                    setTimeFrame = {setTimeFrame_bridgePanel}
                />
            </div>
            <div className="py-14 2xl:py-20">
                <BlocksPanel ethDetailLoading = {timeFrame_blockPanel === '4h' ? ethDetailLoading_4h : ethDetailLoading_1d } 
                    ethDetailData = {timeFrame_blockPanel === '4h' ? ethDetailData_4h : ethDetailData_1d } 
                    snDetailLoading = {timeFrame_blockPanel === '4h' ? snDetailLoading_4h : snDetailLoading_1d } 
                    snDetailData = {timeFrame_blockPanel === '4h' ? snDetailData_4h : snDetailData_1d } 
                    snBlockData = {snBlockData} 
                    snBlockLoading = {snBlockLoading}
                    snProofData = {snProofData} 
                    snProofLoading = {snProofLoading}
                    timeFrame = {timeFrame_blockPanel}
                    setTimeFrame = {setTimeFrame_blockPanel}
                />
            </div>
            <div className="py-14 2xl:py-20">
                <TxnsPanel ethDetailLoading = {timeFrame_txnsPanel === '4h' ? ethDetailLoading_4h : ethDetailLoading_1d } 
                    ethDetailData = {timeFrame_txnsPanel === '4h' ? ethDetailData_4h : ethDetailData_1d } 
                    snDetailLoading = {timeFrame_txnsPanel === '4h' ? snDetailLoading_4h : snDetailLoading_1d } 
                    snDetailData = {timeFrame_txnsPanel === '4h' ? snDetailData_4h : snDetailData_1d } 
                    snBlockData = {snBlockData} 
                    snBlockLoading = {snBlockLoading}
                    timeFrame = {timeFrame_txnsPanel}
                    setTimeFrame = {setTimeFrame_txnsPanel}
                />
            </div>
            <div className="py-14 2xl:py-20">
                <LatencyPanel ethDetailLoading = {timeFrame_latencyPanel === '4h' ? ethDetailLoading_4h : ethDetailLoading_1d } 
                    ethDetailData = {timeFrame_latencyPanel === '4h' ? ethDetailData_4h : ethDetailData_1d } 
                    snDetailLoading = {timeFrame_latencyPanel === '4h' ? snDetailLoading_4h : snDetailLoading_1d } 
                    snDetailData = {timeFrame_latencyPanel === '4h' ? snDetailData_4h : snDetailData_1d } 
                    snBlockData = {snBlockData} 
                    snBlockLoading = {snBlockLoading}
                    snProofData = {snProofData} 
                    snProofLoading = {snProofLoading}
                    timeFrame = {timeFrame_latencyPanel}
                    setTimeFrame = {setTimeFrame_latencyPanel}
                />
            </div> 
        </div>
    );
}

export default Main;