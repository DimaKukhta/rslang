import { AggregatedActions, AggregatedWordsTypes, IAggregatedWords } from '../../types/aggregatedWords';

const initialState: IAggregatedWords = {
  paginatedResults: [],
  totalCount: {
    count: 0,
  },
};

export default function (state: IAggregatedWords = initialState, action: AggregatedActions): IAggregatedWords {
  switch (action.type) {
    case AggregatedWordsTypes.GET_AGGREGATED_WORDS:
      return { ...action.payload };

    default:
      return {
        ...state,
      };
  }
}
